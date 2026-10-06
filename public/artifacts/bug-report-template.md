# Bug Report Template

## Bug Report Fields

| Field | Description | Required |
|-------|-------------|----------|
| **Title** | Concise summary: [Component] Brief description of issue | Yes |
| **Severity** | Critical / High / Medium / Low / Cosmetic | Yes |
| **Priority** | P0 (Immediate) / P1 (24h) / P2 (Week) / P3 (Sprint) / P4 (Backlog) | Yes |
| **Environment** | OS, Browser, Device, App Version, Build Number | Yes |
| **Reproduction Steps** | Numbered steps to reproduce | Yes |
| **Expected Result** | What should happen | Yes |
| **Actual Result** | What actually happens | Yes |
| **Evidence** | Screenshots, Videos, Logs, Network traces | Yes |
| **Impact** | User impact, business impact, affected users % | Yes |
| **Workaround** | Temporary workaround if available | No |
| **Related Tickets** | Links to related bugs, stories, PRs | No |

## Severity Definitions

| Severity | Definition | Example |
|----------|------------|---------|
| **Critical** | System unusable, data loss, security breach, revenue loss | Payment failure, data corruption, auth bypass |
| **High** | Major feature broken, no workaround | Checkout broken, API returning 500 |
| **Medium** | Feature partially works, workaround exists | Filter not working, slow performance |
| **Low** | Minor issue, minimal impact | Typo, alignment issue, minor UI glitch |
| **Cosmetic** | Visual only, no functional impact | Color shade, spacing, font size |

## Priority Matrix

| Severity \ Business Impact | High Revenue | Core Feature | Internal Tool | Nice to Have |
|----------------------------|--------------|--------------|---------------|--------------|
| Critical | P0 | P0 | P1 | P2 |
| High | P0 | P1 | P2 | P3 |
| Medium | P1 | P2 | P3 | P4 |
| Low | P2 | P3 | P4 | P4 |
| Cosmetic | P3 | P4 | P4 | P4 |

## Example Bug Reports

### Example 1: Critical - Payment Processing Failure
**Title:** [Payment] Stripe webhook fails silently on network timeout causing order confirmation failure

**Severity:** Critical | **Priority:** P0

**Environment:** Production, Chrome 120, iOS Safari 17, App v2.3.1

**Reproduction Steps:**
1. Add items to cart ($50+)
2. Proceed to checkout with credit card
3. Complete payment on Stripe hosted page
4. Network interruption occurs during webhook delivery
5. User redirected to success page but order not created

**Expected:** Order created, confirmation email sent, inventory reserved

**Actual:** Order not created, user sees success, no email, inventory not reserved

**Evidence:** Stripe dashboard shows payment succeeded, webhook retry failed after 3 attempts, application logs show timeout

**Impact:** 15 orders lost in last 24h, ~$750 revenue, customer complaints

**Workaround:** Manual order creation from Stripe dashboard

---

### Example 2: High - API Returns 500 on Valid Request
**Title:** [API] GET /api/v1/users/{id}/orders returns 500 for users with 100+ orders

**Severity:** High | **Priority:** P1

**Environment:** Staging, Postman, API v1.4.2

**Reproduction Steps:**
1. Create test user with 150 orders
2. Call GET /api/v1/users/{userId}/orders
3. Observe 500 response

**Expected:** Paginated list of orders (default page=1, size=20)

**Actual:** 500 Internal Server Error, stack trace shows OutOfMemoryError

**Evidence:** Response body, application logs, heap dump

**Impact:** Power users cannot view order history, affects 2% of user base

**Workaround:** Use date range filters to reduce result set

---

### Example 3: Medium - Filter Not Working
**Title:** [Catalog] Category filter does not apply when multiple categories selected

**Severity:** Medium | **Priority:** P2

**Environment:** Chrome 120, Firefox 121, Safari 17, App v2.3.1

**Reproduction Steps:**
1. Navigate to product catalog
2. Select "Electronics" category filter
3. Select "Accessories" category filter
4. Observe results

**Expected:** Products from both Electronics AND Accessories

**Actual:** Only Electronics products shown

**Evidence:** Screenshot showing filter state and results, network request shows only one category parameter

**Impact:** Users cannot browse cross-category, workaround is sequential filtering

**Workaround:** Apply filters one at a time

---

### Example 4: Low - Typo in Error Message
**Title:** [Auth] Typo in "Password reset email sent" message

**Severity:** Low | **Priority:** P3

**Environment:** All browsers, App v2.3.1

**Reproduction Steps:**
1. Go to forgot password page
2. Enter valid email
3. Submit form
4. Read success message

**Expected:** "Password reset email has been sent to your inbox"

**Actual:** "Password reset email has been sent to your inbxo"

**Evidence:** Screenshot

**Impact:** Minor confusion, brand perception

---

### Example 5: Cosmetic - Button Alignment
**Title:** [UI] "Cancel" button misaligned in modal on mobile

**Severity:** Cosmetic | **Priority:** P4

**Environment:** iPhone 14, Safari, iOS 17.2

**Reproduction Steps:**
1. Open delete confirmation modal on mobile
2. Observe button alignment

**Expected:** Buttons centered horizontally with equal spacing

**Actual:** Cancel button 2px lower than Delete button

**Evidence:** Screenshot with grid overlay

**Impact:** Visual polish only
