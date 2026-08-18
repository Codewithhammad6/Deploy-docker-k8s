# Fix Logout & Auth Issues Plan

## Steps:
- [x] 1. Update userStore.js - Add localStorage token handling and fix logout
- [x] 2. Update axios.js - Add auth error interceptor handling
- [x] 3. Update App.jsx - Initialize token from localStorage on app start

## Changes:
1. **userStore.js**:
   - Added localStorage token storage on login and verify
   - Fixed logout to ALWAYS clear localStorage, even if API fails
   - Added token verification in checkAuth with localStorage fallback

2. **axios.js**:
   - Added response interceptor to handle 401 errors
   - Clears token on unauthorized responses

3. **App.jsx**:
   - Initializes token from localStorage on app startup

## Note for Backend:
The backend needs to return a `token` in the login and verify email responses. Make sure your backend API returns:
```json
{
  "user": {...},
  "token": "jwt-token-here",
  "message": "..."
}
```

