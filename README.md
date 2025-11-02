# SauceDemo Test Automation

This project provides comprehensive end-to-end testing for the SauceDemo e-commerce platform. Built with Playwright framework, it covers essential user workflows and ensures application reliability across multiple browsers.

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test tests/b_login_positive.spec.ts
```

### Run Tests on Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run Tests in Headed Mode (Browser Visible)
```bash
npx playwright test --headed
```

## 📊 Report Generation and Viewing

### View HTML Report
After running tests, an HTML report is automatically generated:

```bash
npx playwright show-report
```

This command opens a detailed test report in your default browser.

### Report Features
- ✅ Test results and pass rates
- ⏱️ Execution time for each test
- 🖼️ Screenshots on failures
- 🎬 Test execution videos (on failures)
- 📊 Cross-browser comparison results

## 📁 Project Structure

```
automation/
├── tests/                     # Test files
│   ├── a_auth_guard.spec.ts   # Authentication guard tests
│   ├── b_login_positive.spec.ts # Successful login tests
│   ├── c_login_negative.spec.ts # Failed login tests
│   ├── d_sorting_validation.spec.ts # Product sorting tests
│   ├── e_add_to_cart.spec.ts  # Shopping cart functionality tests
│   └── utils/                 # Helper functions
│       ├── loginHelper.ts     # Login utility functions
│       └── logoutHelper.ts    # Logout utility functions
├── playwright.config.ts       # Playwright configuration
├── playwright-report/         # HTML report files
└── test-results/             # Test result files
```

## 🔧 Configuration

### Basic Settings
- **Base URL**: `https://www.saucedemo.com`
- **Browsers**: Chromium, Firefox, WebKit
- **Parallel Execution**: Enabled
- **Retry**: 2 times in CI environment
- **Reporter**: HTML

### Environment Variables
You can update the `baseURL` in `playwright.config.ts` for different environments.

## 📋 Test Scenarios

1. **Authentication Guard** (`a_auth_guard.spec.ts`)
   - Unauthorized access control
   - Redirect to login page verification

2. **Successful Login** (`b_login_positive.spec.ts`)
   - Valid user credentials login
   - Homepage redirect verification

3. **Failed Login** (`c_login_negative.spec.ts`)
   - Invalid user credentials handling
   - Error message validation

4. **Product Sorting** (`d_sorting_validation.spec.ts`)
   - A-Z, Z-A alphabetical sorting
   - Price-based sorting (low-high, high-low)

5. **Shopping Cart Operations** (`e_add_to_cart.spec.ts`)
   - Product addition and removal
   - Checkout process flow
   - Order completion verification

## 🛠️ Development

### Adding New Tests
1. Create a new `.spec.ts` file in the `tests/` directory
2. Import necessary helper functions from `utils/` directory
3. Write your test scenarios

### Helper Functions
- `loginHelper.ts`: Utility functions for login operations
- `logoutHelper.ts`: Utility functions for logout operations

## 🐛 Troubleshooting

### Common Issues
1. **Browser not found error**
   ```bash
   npx playwright install
   ```

2. **Port conflicts**
   - Use a different port or stop running services

3. **Test failures**
   - Run with `--headed` mode for visual inspection
   - Check error details in HTML report

### Debugging Tips
- Use `console.log()` to check variable values
- Use `page.pause()` to pause test execution
- Use Playwright Inspector for step-by-step debugging

## 📞 Support

For questions regarding test scenarios, please refer to the project documentation or consult the official Playwright documentation.

---

**Note**: This project is continuously maintained with regular updates and new test scenarios.