## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * **ProjectDetail**
    * HeaderComponent
      * MediaComponent
        * Media
        * ShareBar
      * HeaderSidebar
        * Stats
        * Backing
    * BodyComponent
      * ProjectNavComponent
      * ProjectDetail
      * RewardIndexComponent
        * RewardIndexItem
  * **DiscoverComponent**
    * CategoriesIndex
      * ProjectsIndex
        * ProjectIndexItem
    * **CategoryComponent**
      * CategoryIndex
        * CategoryIndexItem


## Routes
