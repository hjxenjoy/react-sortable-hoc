# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.1.0"></a>
# [0.1.0](https://github.com/hjxenjoy/react-sortable-hoc/compare/v1.1.0...v0.1.0) (2021-02-26)


### Bug Fixes

* added prop-types to peerDependencies ([0e855c5](https://github.com/hjxenjoy/react-sortable-hoc/commit/0e855c5))
* clear autoscroller when autoscroll is disabled ([#604](https://github.com/hjxenjoy/react-sortable-hoc/issues/604)) ([3fd83f9](https://github.com/hjxenjoy/react-sortable-hoc/commit/3fd83f9))
* copy canvas content into cloned node ([43ad122](https://github.com/hjxenjoy/react-sortable-hoc/commit/43ad122))
* do not copy canvas context if it has neither width nor height ([#530](https://github.com/hjxenjoy/react-sortable-hoc/issues/530)) ([3808437](https://github.com/hjxenjoy/react-sortable-hoc/commit/3808437))
* don't spread the keysToOmit parameter in omit util ([#563](https://github.com/hjxenjoy/react-sortable-hoc/issues/563)) ([1c69772](https://github.com/hjxenjoy/react-sortable-hoc/commit/1c69772))
* Fix broken UMD build ([#587](https://github.com/hjxenjoy/react-sortable-hoc/issues/587)) ([6cb7750](https://github.com/hjxenjoy/react-sortable-hoc/commit/6cb7750))
* get updated index after updateBeforeSortStart ([4471a0a](https://github.com/hjxenjoy/react-sortable-hoc/commit/4471a0a))
* helperContainer PropType definition broke server-side rendering ([#471](https://github.com/hjxenjoy/react-sortable-hoc/issues/471)) ([c0eef97](https://github.com/hjxenjoy/react-sortable-hoc/commit/c0eef97))
* invalid helperContainer PropType definition ([#493](https://github.com/hjxenjoy/react-sortable-hoc/issues/493)) ([dc1d18f](https://github.com/hjxenjoy/react-sortable-hoc/commit/dc1d18f))
* issue with cloning canvas context of dragged items ([#512](https://github.com/hjxenjoy/react-sortable-hoc/issues/512)) ([4df34ad](https://github.com/hjxenjoy/react-sortable-hoc/commit/4df34ad))
* issue with getComputedStyle and getScrollingParent ([b104249](https://github.com/hjxenjoy/react-sortable-hoc/commit/b104249))
* issue with radio input name collision when cloning helper ([5337c97](https://github.com/hjxenjoy/react-sortable-hoc/commit/5337c97))
* issue with windowAsScrollContainer and translation offsets ([0391e62](https://github.com/hjxenjoy/react-sortable-hoc/commit/0391e62))
* lock axis story should not use lockToContainerEdges ([db1d3a9](https://github.com/hjxenjoy/react-sortable-hoc/commit/db1d3a9))
* omit disableAutoscroll prop ([#502](https://github.com/hjxenjoy/react-sortable-hoc/issues/502)) ([e994e73](https://github.com/hjxenjoy/react-sortable-hoc/commit/e994e73))
* omit spreading helperContainer prop ([#497](https://github.com/hjxenjoy/react-sortable-hoc/issues/497)) ([12bafdf](https://github.com/hjxenjoy/react-sortable-hoc/commit/12bafdf))
* overflow bug while dragging an item upwards in a grid ([1a2c87e](https://github.com/hjxenjoy/react-sortable-hoc/commit/1a2c87e))
* pass isKeySorting to onSortOver and updateBeforeSortStart handler props ([#531](https://github.com/hjxenjoy/react-sortable-hoc/issues/531)) ([763fd33](https://github.com/hjxenjoy/react-sortable-hoc/commit/763fd33))
* PropType definition for keyCodes was incorrect ([eaf5070](https://github.com/hjxenjoy/react-sortable-hoc/commit/eaf5070))
* remove browser field with umd bundle ([#541](https://github.com/hjxenjoy/react-sortable-hoc/issues/541)) ([d3b30fd](https://github.com/hjxenjoy/react-sortable-hoc/commit/d3b30fd))
* replace process.env.NODE_ENV in UMD builds ([16135df](https://github.com/hjxenjoy/react-sortable-hoc/commit/16135df))
* update helperContainer prop type definition ([#491](https://github.com/hjxenjoy/react-sortable-hoc/issues/491)) ([fd30383](https://github.com/hjxenjoy/react-sortable-hoc/commit/fd30383))
* updated the behaviour of disabled elements ([bd3d041](https://github.com/hjxenjoy/react-sortable-hoc/commit/bd3d041))
* virtualized collection grid bug ([a57975c](https://github.com/hjxenjoy/react-sortable-hoc/commit/a57975c))


### Features

* **context:** use react new context api ([e9d6323](https://github.com/hjxenjoy/react-sortable-hoc/commit/e9d6323))
* Add CSS Grid grid-gap support ([#657](https://github.com/hjxenjoy/react-sortable-hoc/issues/657)) ([4efcaa2](https://github.com/hjxenjoy/react-sortable-hoc/commit/4efcaa2))
* Add disableAutoscroll prop ([#484](https://github.com/hjxenjoy/react-sortable-hoc/issues/484)) ([7845e76](https://github.com/hjxenjoy/react-sortable-hoc/commit/7845e76))
* Add keyCodes prop to configure the keyboard shortcuts ([#588](https://github.com/hjxenjoy/react-sortable-hoc/issues/588)) ([4c6d8dd](https://github.com/hjxenjoy/react-sortable-hoc/commit/4c6d8dd))
* add support for keyboard sorting ([#501](https://github.com/hjxenjoy/react-sortable-hoc/issues/501)) ([439b92f](https://github.com/hjxenjoy/react-sortable-hoc/commit/439b92f))
* added helperContainer prop ([286eff4](https://github.com/hjxenjoy/react-sortable-hoc/commit/286eff4))
* allow helperContainer prop to be a function returning an HTMLElement ([#489](https://github.com/hjxenjoy/react-sortable-hoc/issues/489)) ([f4a9b4a](https://github.com/hjxenjoy/react-sortable-hoc/commit/f4a9b4a))
* Detect scroll container automatically ([#507](https://github.com/hjxenjoy/react-sortable-hoc/issues/507)) ([6572921](https://github.com/hjxenjoy/react-sortable-hoc/commit/6572921))
* prevent sort start on contentEditable target ([d64c8cf](https://github.com/hjxenjoy/react-sortable-hoc/commit/d64c8cf))



# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
