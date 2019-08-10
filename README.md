# iChef app

iChef app developed with react-native

## Development instructions

This instructions were written while using react-native 0.60.4. Please update it if outdated.

### Install dependencies

- Node.js (there is a .nvmrc on the root)
- JDK (right now I'm working with OpenJDK 10)
- _No need_ to install react-native cli on global (it's already on package.json depenencies)

- Android development environment

Android Studio is needed set up necessary tooling for Android.

Follow the instructions on react-native docs:  
https://facebook.github.io/react-native/docs/getting-started#android-development-environment

- Watchman

It's not required, but good to have it installed and configured

On linux:
https://facebook.github.io/react-native/docs/getting-started#watchman

On mac:

```shell
brew install watchman
```

### Setup workflow for android device

Follow the instructions on react-native docs
https://facebook.github.io/react-native/docs/getting-started#preparing-the-android-device

### Running the application on emulator

_Ps.:_ If you just installed android environment you need to restart your terminal to make `emulator` command available.

- First you need to run the emulator

```shell
# list available avds
emulator -list-avds
# choose one and run it
emulator @Nexus_5X_API_28
# for more instructions
emulator -help
```

- Run the development server  
  Every change on JavaScript will be deployed on the emulator using the development server.

```shell
npm start
```

- To run your app for the first time you'll need a full deploy. Every other change you make on native stuff will require another full deploy to the device.

```shell
# android
npx react-native run-android
# ios
npx react-native run-ios
```

- Live reload

The emulator has a live reload feature. To enable it, focus on your emulator and press ctrl+M to open a menu. On this menu click on "Enable live Reload".
