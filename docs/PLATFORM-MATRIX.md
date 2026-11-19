# CashDublo Application Platform Matrix

Last audited: 2026-11-20

This matrix records the platform targets shown on the All Apps cards and the evidence used to set them. A platform target is not proof of a successful build, store publication, or current live availability. Planned targets are labeled as planned and are not counted as supported releases.

## Current catalogue

| Application | Platforms shown | Repository evidence / qualification |
|---|---|---|
| AI2AISync | Android · iOS · macOS (planned) | `ai2ai_sync/apps/mobile/README.md` identifies the mobile foundation as Android and iOS (development; not release-ready). The separate macOS desktop application is planned. |
| VoiceModel | iOS · Android | `your_voice_model`: README says iOS and Android; desktop link workflow is not counted as a separate desktop app. |
| Marvin | iOS · Android | `marvin`: README says iOS and Android. `marvin_web` is a separate web face and explicitly is not the app running in a browser. |
| PictureGlobe | Android | `pictureglobe`: Android-first; iPhone version follows Android 1.0.0. |
| Mixology | Android | `mixology`: README identifies it as an Android app. |
| Hit Record | Android · Web | `hit_record`: Android app; `hit_record_web`: separate browser app. |
| Testra Accuracy | Android | `testra_accuracy`: README identifies Android app. iOS configuration exists, but an iOS build/release was not verified. |
| Dear Idea | Android · iOS · Mac · Windows | `dear_idea`: iOS and Android; `dear_idea_desktop`: Mac and Windows desktop program. |
| GO | iOS · Android | `go`: README says iOS and Android. |
| Travel Journal | iOS · Android | `travel_journal`: README says iOS and Android. `travel_journal_web` is a separate companion front end, not counted as a browser build of the app. |
| SAY | iOS · Android | `say`: README says iOS and Android; `say_ios` is the separate iPhone source. |
| TTS Widget | Android | `ttswidget`: Android app. `ttswidget_ios` currently contains update scaffolding only; iPhone app source has not landed. |
| Player | iOS · Android | `player`: README says iOS and Android; a separate iOS repository also exists. |
| AI Cash Portfolio | iOS · Android · Web | `ai_cash_portfolio`: iOS and Android; `ai_cash_portfolio_web`: browser app repository. |
| Cash Portfolio | Android · iOS · Web | `cash_portfolio`: Android, iOS, and web scripts/configuration; `cash_portfolio_web`: browser app repository. Build/deployment availability is not implied. |
| Apple2Player | Mac · Windows | `apple2player_mac` and `apple2player_win` are separate Mac and Windows implementations of the same product family. |
| Dear Idea Desktop | Mac · Windows | `dear_idea_desktop`: README documents Mac and Windows builds; no Linux build is documented. |
| GitHub HQ | Mac | `github_hq_dashboard`: README identifies a Mac desktop app. |
| Script-Run | Mac | `script-installer`: README describes a Mac app and Mac build output. |
| Change App Icons | Mac · Windows | `change_app_icons`: README documents Mac and Windows builds. |
| CashDublo Coder | Mac · Windows | `cashdublo_coder`: README documents Mac and Windows builds. |
| App Translator | Mac | `app_translator`: README identifies it as a Mac desktop app. |
| Build Manager | Mac | `build-manager`: README identifies it as a Mac desktop app. |
| Rebuild-All | Mac · Linux (declared) | The app overview declares MAC · LIN; a matching source repository was not located in this audit, so Linux remains a declared target rather than independently verified support. |
| PodEdPro | Android · iOS | `poded_pro` is Android; `podedpro_ios` is the separate iPhone implementation. Windows is explicitly planned but not in the current build. |
| Galaxy Repeat | Android | `galaxy_repeat`: README identifies it as an Android utility. |
| Best Mac File Manager | Mac | `best_mac_file_manager`: README explicitly says Mac only. |
| Patent It! | Android · iOS | `patent_it`: README lists Android and iOS. |
| Crash Catcher | Android | `crash_catcher`: README identifies Android. |
| Wi-Fi Tether | Android · Windows · Mac · Linux | `wifi_tether_app`: Android control app plus desktop payloads for Windows, Mac, and Linux. Desktop payloads are not separate native app shells. |
| AI Teacher | Android | `ai_teacher`: README documents the Android shell. |
| Apple Dextop | Mac | `apple_dextop`: README says Mac only; the connected Samsung phone is a device, not a second app platform. |
| Contracts | Android · iOS | `contracts` is Android; `contracts_ios` is the separate iPhone implementation. |
| Secure Mac Remote Terminal | Mac · Android | `secure_terminal`: native macOS app and Android companion; Windows, Linux, and iOS are explicitly excluded. |

## Classification rules

- Show all real application targets together on the All Apps card, even when the implementations live in separate repositories.
- Keep planned or unverified targets explicitly labeled; do not silently count them as supported.
- A companion website counts as **Web** only when it is the application itself running in a browser (for example, AI Cash Portfolio Web, Cash Portfolio Web, and Hit Record Web).
- A separate marketing, status, showcase, or companion website is a **Web Front End**, not automatically another app platform (for example, Marvin's Website and Travel Journal Web).
- Desktop payloads used by a mobile app may be listed as additional supported platform targets with a clear qualifier; they do not imply a separate desktop GUI.
- A repository's existence, package configuration, or README target does not prove a successful build or store release. Verify build and release status separately.
