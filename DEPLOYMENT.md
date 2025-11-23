# Firebase Deployment Instructions 🔥

## Prerequisites
✅ Firebase CLI installed
✅ Production build created (`npm run build`)
✅ firebase.json configuration file created

## Deployment Steps

### 1. Login to Firebase
```bash
firebase login
```
This will open your browser for Google authentication.

### 2. Initialize Firebase Project
```bash
firebase init
```

**Select options:**
- ❓ Which Firebase features? → **Hosting**
- ❓ Select a project → **Create a new project** OR **Use an existing project**
  - If new: Enter project ID (e.g., `subrat-portfolio`)
- ❓ What do you want to use as your public directory? → **out**
- ❓ Configure as a single-page app? → **Yes**
- ❓ Set up automatic builds with GitHub? → **No** (we'll do this manually)
- ❓ Overwrite index.html? → **No**

### 3. Deploy to Firebase
```bash
firebase deploy
```

### 4. Your Site Will Be Live! 🎉
After deployment, Firebase will give you a URL like:
```
https://subrat-portfolio.web.app
```
OR
```
https://subrat-portfolio.firebaseapp.com
```

## Custom Domain (Optional)
To add your own domain (e.g., subratsharma.com):
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow DNS configuration steps

## Quick Deploy Script
Add this to `package.json` scripts:
```json
"deploy": "npm run build && firebase deploy"
```

Then just run: `npm run deploy`

---

## Troubleshooting

**If build fails:**
- Check `next.config.mjs` has `output: 'export'`
- Ensure all images use `unoptimized: true`

**If deployment fails:**
- Run `firebase login:ci` for token
- Check `firebase.json` public directory is "out"

---

## Your Portfolio is Ready! 🚀

Your networking-focused portfolio will be live on:
- **Firebase URL**: https://[project-id].web.app
- **GitHub**: https://github.com/subratsharma2101/portfolio-website

**Share it with:**
- LinkedIn recruiters
- Job applications
- Networking professionals
- Certification programs

Good luck with your networking career! 🌐
