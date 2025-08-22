# 🚀 Vercel Deployment Guide

## Prerequisites
- GitHub repository connected to Vercel
- Node.js 18+ environment

## Environment Variables
Create these environment variables in your Vercel dashboard:

### EmailJS Configuration
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

## Build Configuration
Vercel will automatically detect this is a Vite project and use:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Common Issues & Solutions

### 1. Missing Dependencies
If you get build errors about missing packages:
```bash
# Locally run:
npm install
npm run build
```

### 2. Environment Variables
Make sure all environment variables are set in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add all variables with `VITE_` prefix
- Redeploy after adding variables

### 3. Build Cache Issues
If builds are inconsistent:
- Clear Vercel build cache
- Force redeploy from dashboard

## Local Testing
Before deploying, test locally:
```bash
npm install
npm run build
npm run preview
```

## Deployment Steps
1. Push changes to GitHub
2. Vercel automatically triggers build
3. Check build logs for any errors
4. Environment variables are automatically injected
5. Site deploys to provided URL

## Troubleshooting
- Check Vercel build logs for specific error messages
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly
- Test build locally before pushing 