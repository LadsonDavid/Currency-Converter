# **App Name**: SwiftConvert

## Core Features:

- Currency Conversion: Allow users to convert between different currencies using real-time exchange rates from a free API.
- Offline Mode: Enable the app to work offline using cached exchange rates.
- Favorite Currencies: Allow users to save favorite currency pairs for quick access.

## Style Guidelines:

- Primary color: #2E86DE (blue).
- Secondary color: #55B559 (green).
- Background color: #F5F8FA (light) / #202229 (dark).
- Text color: #333333 (light mode) / #FFFFFF (dark mode).
- Accent color: #FF7F50 (coral) for interactive elements.
- Currency amounts: Bold, large size.
- Secondary text: Regular weight, medium size.
- Subtle sliding transitions between screens.
- Fade effects when updating values.
- Number counting animation for dramatic effect.

## Original User Request:
# Build a Professional Currency Converter Mobile App

## Overview
Create a fully functional, cross-platform currency converter mobile application that allows users to convert between different currencies using real-time exchange rates. The app should have an intuitive interface, offline capabilities, and a modern design.

## Core Functionality Requirements
1. **Currency Conversion**
   - Support for at least 30 major world currencies
   - Real-time exchange rate updates via a free API (such as ExchangeRate-API or Open Exchange Rates)
   - Historical rate tracking for main currency pairs
   - Ability to swap between source and target currencies with one tap

2. **User Interface**
   - Clean, minimalist design with intuitive navigation
   - Dark and light mode support
   - Custom number pad for amount input
   - Conversion results displayed prominently with animation effects
   - Pull-to-refresh for manual rate updates

3. **User Experience Features**
   - Favorite/pinned currency pairs for quick access
   - Recently used currencies list
   - Offline mode with cached exchange rates
   - Configurable update frequency
   - Vibration feedback for interactions (optional)

## Technical Specifications
1. **Frontend Framework**
   - React Native for cross-platform compatibility
   - Expo for simplified development and deployment
   - Responsive design that works on various screen sizes

2. **State Management**
   - Redux or Context API for state management
   - Persist app state using AsyncStorage

3. **API Integration**
   - Implement API caching to reduce API calls
   - Error handling for network failures
   - Rate limiting protection
   - Background fetching for fresh data

4. **Data Storage**
   - Local storage for user preferences
   - SQLite or Realm for offline database (if needed)
   - Efficient caching mechanism for exchange rates

## Project Structure
```
/src
  /api
    currencyService.js
    apiClient.js
  /components
    CurrencyPicker.js
    NumberPad.js
    ConversionResult.js
    FavoritesList.js
  /screens
    HomeScreen.js
    SettingsScreen.js
    FavoritesScreen.js
  /store
    actions.js
    reducers.js
    store.js
  /utils
    currencyUtils.js
    formatters.js
  /assets
    icons/
    images/
  /themes
    colors.js
    typography.js
  App.js
```

## Development Milestones
1. **Setup & Basic Structure (Day 1)**
   - Initialize Expo project on Replit
   - Set up project structure and navigation
   - Implement basic UI components

2. **Core Functionality (Days 2-3)**
   - Implement API connection and data fetching
   - Build currency selection components
   - Create conversion logic and display

3. **Enhanced Features (Days 4-5)**
   - Add favorites and history functionality
   - Implement offline mode and caching
   - Add settings and preferences

4. **Polish & Testing (Days 6-7)**
   - Refine UI/UX with animations and transitions
   - Optimize performance
   - Test on multiple device sizes
   - Fix bugs and edge cases

## UI/UX Design Guidelines
1. **Color Scheme**
   - Primary: #2E86DE (blue)
   - Secondary: #55B559 (green)
   - Background: #F5F8FA (light) / #202229 (dark)
   - Text: #333333 (light mode) / #FFFFFF (dark mode)

2. **Typography**
   - Main font: Inter or SF Pro
   - Currency amounts: Bold, large size
   - Secondary text: Regular weight, medium size

3. **Animations**
   - Subtle sliding transitions between screens
   - Fade effects when updating values
   - Number counting animation for dramatic effect

## Advanced Features (Optional)
1. **Currency Charts**
   - Display historical exchange rate charts
   - Support for different time periods (1D, 1W, 1M, 3M, 1Y)

2. **Currency Alerts**
   - Notify users when a currency pair reaches a specified threshold
   - Push notifications for significant rate changes

3. **Widgets**
   - Home screen widget for frequently used conversions
   - Quick conversion without opening the app

4. **Multi-currency Calculator**
   - Advanced calculator with multiple currencies simultaneously
   - Split bill feature with different currencies

## Testing Requirements
1. Unit tests for conversion logic
2. Integration tests for API connectivity
3. UI tests for main user flows
4. Offline functionality tests
5. Performance tests on low-end devices

## Deployment Instructions
1. Configure app.json with appropriate name and identifiers
2. Set up environment variables for API keys
3. Build the app using Expo's build service
4. Test on physical devices before final submission

## Resources
- ExchangeRate-API documentation: https://www.exchangerate-api.com/docs
- React Native documentation: https://reactnative.dev/docs
- Expo documentation: https://docs.expo.dev
- UI inspiration: Currency converter apps like XE Currency, Revolut

## Success Criteria
- App functions correctly with and without internet connection
- Conversion calculations are accurate to two decimal places
- App loads within 2 seconds on target devices
- UI is responsive and adapts to different screen sizes
- All core features work as expected with intuitive UX
  