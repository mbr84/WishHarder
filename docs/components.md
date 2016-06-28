## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * Navbar
    * Search
  * **ProjectShow**
    * Header Component
      * Media Component
        * Media
        * ShareBar
      * HeaderSidebar
        * Stats
        * Backing
    * Body Component
      * ProjectNav Component
      * ProjectDetail
      * RewardIndex Component
        * RewardIndexItem
  * **ProjectsIndex Component**
    * Categories
      * CategoryItem
    * Features
      * FeatureRow Comp
        * ProjectDetail
    * **Category Component**
      * Header Component
      * CategoryIndex
        * ProjectDetail



## Routes

  * component App path /
    * component ProjectIndex path /Discover
      * component Category
    * component ProjectShow path /projects/:id
