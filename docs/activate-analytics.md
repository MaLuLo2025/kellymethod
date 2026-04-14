# Activating Google Analytics 4

The site has GA4 architecture wired in but no Measurement ID configured. Analytics is dark until you complete the steps below. This is intentional — the wiring is in place so we don't forget; the data plane is dark until you choose to turn it on.

## What's Already in Place

- A `GoogleAnalytics` component that loads GA4 scripts only when consent is given
- A `CookieConsentProvider` that manages user consent state via localStorage
- The cookie banner is wired to the consent context — clicking "Accept" allows GA to load
- IP anonymization is enabled by default
- No advertising features (Google Signals, etc.) are enabled
- Pageview tracking fires automatically on route changes

The only thing missing is the Measurement ID itself.

## Step-by-Step Activation

### 1. Create the GA4 property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with the Google account that should own the analytics data
3. Click **Admin** (gear icon, bottom left)
4. Under the Account column: either select an existing account or click **Create Account**
5. Under the Property column: click **Create Property**
6. Property name: `The Kelly Method`
7. Reporting time zone and currency: set as appropriate
8. Click **Next** through business details, accept the terms

### 2. Set up the data stream

1. After property creation, you'll be prompted to choose a platform — choose **Web**
2. Website URL: `https://www.kellymethod.com`
3. Stream name: `Kelly Method Production`
4. Enhanced measurement: leave **on** (default) — this captures scrolls, outbound clicks, file downloads automatically
5. Click **Create stream**

### 3. Copy the Measurement ID

After the stream is created, you'll see a **Measurement ID** at the top of the stream details page. It looks like `G-XXXXXXXXXX` (the letter G followed by ten alphanumeric characters).

Copy this value.

### 4. Add the Measurement ID to Vercel

1. Go to [vercel.com](https://vercel.com), sign in, navigate to the kellymethod project
2. Click **Settings** (top nav)
3. In the left sidebar, click **Environment Variables**
4. Add a new variable:
   - Key: `NEXT_PUBLIC_GA_ID`
   - Value: the `G-XXXXXXXXXX` value from step 3
   - Environments: check all three (**Production**, **Preview**, **Development**)
5. Click **Save**

### 5. Trigger a redeploy

Vercel does not automatically redeploy when environment variables change. You need to trigger a new deployment manually:

**Option A:** Push any commit to the main branch (even an empty commit will work):

**Option B:** In Vercel, go to **Deployments**, find the most recent production deployment, click the three-dot menu, and choose **Redeploy**.

Wait for the deployment to complete (usually 60-90 seconds).

### 6. Verify it's working

1. Open `https://www.kellymethod.com` in a fresh browser session (incognito works well)
2. The cookie banner should appear at the bottom
3. Click **Accept**
4. Open browser DevTools → Network tab
5. Filter by `google-analytics.com` or `googletagmanager.com`
6. You should see requests to `gtag/js?id=G-XXXXXXXXXX` and `g/collect`
7. In GA4, go to **Reports** → **Realtime** — within a minute or two, your visit should appear

If you see the GA scripts loading and the realtime view shows your visit, GA is working.

## Testing Consent Behavior

To verify the consent gating works correctly:

1. **Test "Decline":** Open an incognito window, visit the site, click **Decline** on the cookie banner. Open DevTools → Network. Verify NO requests to `google-analytics.com` or `googletagmanager.com` are made. Reload the page. The banner should not reappear, and GA should still not load.

2. **Test "Accept":** Open another incognito window, visit the site, click **Accept**. Verify GA scripts now load (check Network tab as above).

3. **Reset consent for testing:** Open DevTools → Console, run:

Refresh. The banner reappears. Useful when you want to test both flows in one session.

## What Gets Tracked

With the current configuration, GA4 will collect:

- Pageviews (path, title, referrer)
- Session duration and engagement
- Geographic location (country, region, city — not precise)
- Device type, browser, OS
- Enhanced measurement events: scrolls, outbound clicks, file downloads, video engagement, site search
- Anonymized IP (last octet stripped before storage)

It will NOT collect:

- Personally identifiable information
- Cross-site advertising data (Google Signals is off)
- Data from users who declined consent

## Turning Analytics Off

If you ever want to disable analytics entirely (for example, during a privacy review):

1. In Vercel → Settings → Environment Variables, delete `NEXT_PUBLIC_GA_ID`
2. Trigger a redeploy

The `GoogleAnalytics` component renders nothing when the Measurement ID is empty, so analytics stops collecting immediately.

## File References

The relevant files in the codebase:

- `src/components/GoogleAnalytics.tsx` — the script loader
- `src/components/CookieConsentContext.tsx` — consent state management
- `src/components/CookieBanner.tsx` — the consent UI
- `src/app/layout.tsx` — where they're wired together
- `.env.example` — the documented environment variable
- `.env.local` — your local environment values (gitignored)

## Common Issues

**The banner never appears.** Check that `CookieConsentProvider` is wrapping the layout in `src/app/layout.tsx`, and that `<CookieBanner />` is rendered inside that provider.

**Accepting consent doesn't load GA.** Check that `NEXT_PUBLIC_GA_ID` is set in Vercel environment variables AND that you triggered a redeploy after adding it. The variable is read at build time.

**Realtime view shows nothing.** GA4 realtime can lag by 30-60 seconds. Wait two minutes. Also check that you accepted consent — declined visits never reach GA.

**Multiple "G-" IDs in your account.** Make sure you're using the Measurement ID from the *Web Data Stream*, not the property ID itself. The stream ID is the one that starts with G-.

---

*Last updated: April 2026. If this runbook is out of date, please update it after activation so the next person has accurate steps.*
