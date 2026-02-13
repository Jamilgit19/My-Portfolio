# Contact Form Setup Instructions

Your portfolio now includes a contact form that sends messages directly to your email: **jamil.rahman.008@gmail.com**

## Quick Setup (Free - 2 minutes)

### Using Web3Forms (Recommended)

1. **Get your free API key**:
   - Go to https://web3forms.com/
   - Enter your email: `jamil.rahman.008@gmail.com`
   - Click "Create Access Key"
   - Check your email and copy the access key

2. **Add the key to your form**:
   - Open `components/portfolio-content.tsx`
   - Find line with: `value="YOUR_ACCESS_KEY_HERE"`
   - Replace `YOUR_ACCESS_KEY_HERE` with your actual API key
   - Example: `value="abc123def-4567-89gh-ijkl-mnop12345678"`

3. **Test it**:
   - Visit your portfolio
   - Scroll to the contact section
   - Fill out and submit the form
   - You'll receive the message at jamil.rahman.008@gmail.com

## Features

- ✅ Direct email delivery to your inbox
- ✅ No backend code required
- ✅ Spam protection included
- ✅ Free forever (250 submissions/month)
- ✅ Works with any email provider (Gmail, ProtonMail, etc.)

## Alternative: Using Formspree

If you prefer Formspree:
1. Go to https://formspree.io/
2. Sign up with your email
3. Create a new form
4. Replace the form action with your Formspree endpoint

---

**Need help?** The form is in `components/portfolio-content.tsx` starting at the "Contact Form" section.
