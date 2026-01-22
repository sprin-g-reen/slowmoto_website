from playwright.sync_api import sync_playwright

def verify_home():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            print("Navigating to home page...")
            page.goto("http://localhost:3000")
            page.wait_for_selector('h1:has-text("Slow Moto Tours")', timeout=10000)

            # Wait for the image to load (if possible, though next/image is lazy, priority=true should help)
            # We can check if the image with alt text is present and visible
            # Note: next/image often wraps img in a div/span or changes structure, but alt text remains.
            print("Checking for Hero image...")
            page.wait_for_selector('img[alt="Motorcycle touring in India"]', timeout=5000)

            # Take a screenshot
            print("Taking screenshot...")
            page.screenshot(path="verification/home_page.png", full_page=True)
            print("Screenshot saved to verification/home_page.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_home()
