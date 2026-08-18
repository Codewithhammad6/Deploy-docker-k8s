#!/bin/bash
# scripts/update-frontend-env.sh

# ============================================
# Update Frontend .env with Backend URL
# ============================================

echo "🔄 Updating Frontend .env with Backend URL..."

# ============================================
# 1. Get Backend URL (from EKS)
# ============================================

# Try to get backend service URL from EKS
BACKEND_URL=$(kubectl get svc backend-service -o jsonpath='{.status.loadBalancer.ingress[0].hostname}' 2>/dev/null)

if [ -z "$BACKEND_URL" ]; then
    # If no load balancer, get node IP
    NODE_INSTANCE_ID=$(kubectl get nodes -o jsonpath='{.items[0].spec.providerID}' | cut -d'/' -f5 2>/dev/null)
    
    if [ -n "$NODE_INSTANCE_ID" ]; then
        BACKEND_IP=$(aws ec2 describe-instances --instance-ids $NODE_INSTANCE_ID --query 'Reservations[0].Instances[0].PublicIpAddress' --output text 2>/dev/null)
        
        if [ -z "$BACKEND_IP" ] || [ "$BACKEND_IP" == "None" ]; then
            BACKEND_IP=$(aws ec2 describe-instances --instance-ids $NODE_INSTANCE_ID --query 'Reservations[0].Instances[0].PrivateIpAddress' --output text 2>/dev/null)
        fi
        
        BACKEND_URL="http://${BACKEND_IP}:5000"
    else
        # Default fallback
        BACKEND_URL="http://localhost:5000"
    fi
fi

echo "🌐 Backend URL: ${BACKEND_URL}"

# ============================================
# 2. Update Frontend .env file
# ============================================

# Path to frontend .env file
file_to_find="../frontend/.env"

# Check if .env exists, if not create from .env.example
if [ ! -f "$file_to_find" ]; then
    if [ -f "../frontend/.env.example" ]; then
        cp ../frontend/.env.example $file_to_find
        echo "📝 Created .env from .env.example"
    else
        # Create new .env file
        touch $file_to_find
        echo "📝 Created new .env file"
    fi
fi

# Backup the .env file
cp $file_to_find $file_to_find.backup

# ============================================
# 3. Update BACKEND_URL for Vite
# ============================================

if grep -q "^VITE_BACKEND_URL=" $file_to_find; then
    # Update existing VITE_BACKEND_URL
    sed -i "s|^VITE_BACKEND_URL=.*|VITE_BACKEND_URL=\"${BACKEND_URL}/api\"|g" $file_to_find
    echo "✅ VITE_BACKEND_URL updated to: ${BACKEND_URL}/api"
else
    # Add VITE_BACKEND_URL if not exists
    echo "VITE_BACKEND_URL=\"${BACKEND_URL}/api\"" >> $file_to_find
    echo "✅ VITE_BACKEND_URL added: ${BACKEND_URL}/api"
fi

# ============================================
# 6. Show updated .env file content
# ============================================

echo ""
echo "📋 Updated Frontend .env values:"
echo "--------------------------------"
grep -E "^(VITE_BACKEND_URL|REACT_APP_BACKEND_URL|API_URL)=" $file_to_find || echo "No matching variables found"

# ============================================
# 7. Show summary
# ============================================

echo ""
echo "✅ Frontend .env updated successfully!"
echo "📝 Backend API URL: ${BACKEND_URL}/api"
echo "📁 File: $file_to_find"