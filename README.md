# AWS IAM Identity Center Browser

**Primary Portal:** `https://internal.awsapps.com/start`

This is a lightweight mobile browser for accessing AWS IAM Identity Center.

## Quick Start

1. Save `index.html` to your computer
2. Open it in your web browser
3. Click the home button (⌂) or bookmark to access `https://internal.awsapps.com/start`

## Features

- **Browser Navigation:** Back, Forward, Refresh, Home buttons
- **Address Bar:** Navigate to AWS domains
- **Bookmarks:** Quick access to AWS portal at `https://internal.awsapps.com/start`
- **Mobile Responsive:** Works on phones, tablets, and desktops
- **Pre-configured:** Already set up for the AWS portal

## Supported Domains

- `https://internal.awsapps.com/start` - Main AWS IAM Identity Center portal
- `https://d-{id}.awsapps.com/start` - Organization instances
- `https://{subdomain}.awsapps.com/start` - Custom subdomains
- AWS documentation and console

## Files Included

- `index.html` - Complete application (all-in-one file)
- `README.txt` - This documentation

## Browser Compatibility

✓ Chrome/Chromium
✓ Firefox
✓ Safari
✓ Edge
✓ Mobile browsers

## How to Use

### Open the Portal
1. Open `index.html` in your browser
2. The homepage shows with the AWS portal information
3. Click "Open AWS Portal" button or the home button (⌂)
4. Navigates to: `https://internal.awsapps.com/start`

### Navigate to Custom Domain
1. Type the AWS domain in the address bar
2. Example: `https://my-org.awsapps.com/start`
3. Click "Go" or press Enter

### Browser Controls
- **←** - Back button (previous page)
- **→** - Forward button (next page)
- **↻** - Refresh (reload page)
- **⌂** - Home (back to AWS portal)

## AWS IAM Identity Center Portal Information

The main portal URL is: `https://internal.awsapps.com/start`

This is where you can:
- Sign in to AWS accounts
- View assigned applications
- Manage single sign-on sessions
- Access AWS resources

## Troubleshooting

**Can't load the portal?**
1. Check your internet connection
2. Open the URL directly in a new browser tab
3. Clear your browser cache
4. Try a different browser

**Getting an error?**
1. Open browser console (F12) to see details
2. Ensure you're using a valid AWS domain
3. Check if the AWS service is accessible

**IFrame shows blank?**
1. Authentication may be required
2. Sign in to AWS in a new tab first
3. The AWS portal may need fresh credentials

## Customization

To change the default portal URL, open `index.html` in a text editor and find:

```javascript
const AWS_PORTAL = 'https://internal.awsapps.com/start';
```

Replace with your custom domain.

To change colors, find the CSS section and modify:
- `#FF9900` - AWS Orange (primary color)
- `#232f3e` - AWS Dark Blue (secondary color)

## Security

- URL validation - Only AWS domains allowed
- IFrame sandboxing - Restricted content execution
- CORS enforcement - Respects AWS security policies
- No credential storage - Passwords not saved locally

## Support

For issues with the application:
1. Check browser console (F12)
2. Verify AWS domain is accessible
3. Try opening the portal in a new tab
4. Clear browser cache and try again

For AWS IAM Identity Center help:
- https://docs.aws.amazon.com/singlesignon/
- AWS Support
- Your organization's AWS administrator

## More Information

AWS IAM Identity Center Documentation:
https://docs.aws.amazon.com/singlesignon/latest/userguide/

Portal URL Format Information:
https://docs.aws.amazon.com/sdkref/latest/guide/access-sso.html

---

**Application:** AWS IAM Identity Center Browser v1.0.0
**Primary Portal:** https://internal.awsapps.com/start
**Status:** Ready to use ✓
