#!/bin/bash

# ============================================
# Update .env for EKS Deployment
# ============================================

# Get EKS node IP dynamically
NODE_INSTANCE_ID=$(kubectl get nodes -o jsonpath='{.items[0].spec.providerID}' | cut -d'/' -f5)

if [ -z "$NODE_INSTANCE_ID" ]; then
    echo "❌ Could not get node instance ID"
    exit 1
fi

# Get public IP
ipv4_address=$(aws ec2 describe-instances --instance-ids $NODE_INSTANCE_ID --query 'Reservations[0].Instances[0].PublicIpAddress' --output text)

if [ -z "$ipv4_address" ] || [ "$ipv4_address" == "None" ]; then
    ipv4_address=$(aws ec2 describe-instances --instance-ids $NODE_INSTANCE_ID --query 'Reservations[0].Instances[0].PrivateIpAddress' --output text)
fi

echo "🌐 IP Address: ${ipv4_address}"

# Path to .env file
file_to_find="../backend/.env"

# Backup
cp $file_to_find $file_to_find.backup

# Update FRONTEND_URL
if [ -f $file_to_find ]; then
    if grep -q "^FRONTEND_URL=" $file_to_find; then
        sed -i "s|^FRONTEND_URL=.*|FRONTEND_URL=\"http://${ipv4_address}:5173\"|g" $file_to_find
    else
        echo "FRONTEND_URL=\"http://${ipv4_address}:5173\"" >> $file_to_find
    fi
    echo "✅ FRONTEND_URL updated to: http://${ipv4_address}:5173"
else
    echo "❌ ERROR: .env file not found"
    exit 1
fi

# Update ADDITIONAL_ORIGINS
if grep -q "^ADDITIONAL_ORIGINS=" $file_to_find; then
    sed -i "/^ADDITIONAL_ORIGINS=/d" $file_to_find
fi
echo "ADDITIONAL_ORIGINS=\"http://${ipv4_address}:5173,http://localhost:5173,https://wanderlust.vercel.app\"" >> $file_to_find
echo "✅ ADDITIONAL_ORIGINS updated"

# Restart backend deployment in EKS
kubectl rollout restart deployment backend
echo "✅ Backend restarted"