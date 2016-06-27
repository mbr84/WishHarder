# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Project Cycles

### Projects API Request Actions

* `fetchAllProjects`
  0. invoked from `ProjectsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/projects` is called.
  0. `receiveAllProjects` is set as the callback.

* `createProject`
  0. invoked from at end of project creation
  0. `POST /api/projects` is called.
  0. `receiveSingleProject` is set as the callback.

* `fetchSingleProject`
  0. invoked from `ProjectDetail` `didMount`/`willReceiveProps`
  0. `GET /api/projects/:id` is called.
  0. `receiveSingleProject` is set as the callback.

* `updateProject`
  0. invoked from `ProjectForm` `onSubmit`
  0. `POST /api/projects` is called.
  0. `receiveSingleProject` is set as the callback.

* `destroyProject`
  0. invoked from delete project button `onClick` or when project fails
  0. `DELETE /api/projects/:id` is called.
  0. `removeProject` is set as the callback.

### Projects API Response Actions

* `receiveAllProjects`
  0. invoked from an API callback.
  0. `Project` store updates `_projects` and emits change.

* `receiveSingleProject`
  0. invoked from an API callback.
  0. `Project` store updates `_projects[id]` and emits change.

* `removeProject`
  0. invoked from an API callback.
  0. `Project` store removes `_projects[id]` and emits change.

### Store Listeners

* `ProjectsIndex` component listens to `Project` store.
* `ProjectDetail` component listens to `Project` store.


## Category Cycles

### Category API Request Actions

* `fetchAllCategories`
  0. invoked from `CategoriesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/discover/` is called.
  0. `receiveAllCategories` is set as the callback.

* `fetchCategoryProjects`
  0. invoked from `CategoryDetail` `didMount`/`willReceiveProps`
  0. `GET /api/discover/categories/:id` is called.
  0. `receiveCategoryProjects` is set as the callback.

### Categories API Response Actions

* `receiveAllCategories`
  0. invoked from an API callback.
  0. `Category` store updates `_categories` and emits change.

* `receiveSingleCategory`
  0. invoked from an API callback.
  0. `Category` store updates `_categories[id]` and emits change.

### Store Listeners

* `CategoriesIndex` component listens to `Category` store.
