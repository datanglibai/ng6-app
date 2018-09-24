# Ng6App, A project to share knowledge of NgModule, Bootstrap and DI

This project is a sample for KS, itwas generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.


## Ngmodule key words

### declarations
set of components, directives, and pipes belongs to (and used in templates) this module.

### imports 
The set of NgModules whose exported declarables are available to templates in this module.

### exports 
The set of components, directives, and pipes declared in this NgModule that can be used in the template of any component that is part of an NgModule that imports this NgModule. Exported declarations are the module's public API.

### providers


## Bootstrap process
- common case:
from module constructor to component constructor, and dependency first.
- with APP_INITIALIZER: 
 bootstrap process, and why sometimes it is not run before all your code logic.

## DI
### provider and injector concept. 
### providers && providedIn
### injector hierarchy
- https://angular.io/guide/hierarchical-dependency-injection
- platform injector
- root injector
- lazy loading module injector, eager loading and lazy loading component /routing component

#### how many instances of your services in your app?

### injector bubbling
- in constructor The parameter type serves as the injector lookup token  
- from bottom to top
  
### when to inject in module/component level
- isolate usage scope
- hold different state for multiple edit sessions.
- specialized provider: different implementation from root/parent providers.



### built-in injection-token constants
- PLATFORM_INITIALIZER: Callback is invoked when a platform is initialized.
- APP_BOOTSTRAP_LISTENER: Callback is invoked for each component that is bootstrapped. The handler function receives the ComponentRef instance of the bootstrapped component.
- APP_INITIALIZER

### Service valued parameters 
  - @Optional 
    - return null if it is not provide. for example a logger service sometimes is optional
  - @Host
    - host means DI search stopped at the parent of current component
  - @Self
    - DI search stopped at component itself
  - @SkipSelf 
    - DI search start from parent component
### how to provide
    - useValue
    - useClass
    - useExisting
    - useFactory
    - live example,  
https://angular.io/guide/dependency-injection-in-action


## next will/might be...
- forRoot && forChild
- Routing
- Tree Shaking
