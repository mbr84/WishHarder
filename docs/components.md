## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * **ProjectDetail**
    * ProjectBacking
  * **DiscoverIndex**
    * CategoryIndexItem
    * **CategoryDetail**
      * CategoryIndexItem



## Routes



For Routes that have no `notebookId`, `NotesIndex` will render all
notes.
