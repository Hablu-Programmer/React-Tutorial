## Ai Governing Docs (**_Project Roadmap_**)

1. Create a vite project
2. Install and setup TailwindCss
3. Create a Color scheme and font family in `tailwind.config` file
4. Add `cn` function.
   - fn path: **src/lib/utils/index.ts**
   - reference: [**LWS**](https://youtu.be/y7DrXkGj7AU)
5. Create all common components. like:- container, button, text-gradient and section title.
6. Create Shared Components. navbar and footer.
   **Note**: _add custom css in `index.css` file_

   ```css
   /* Prevent body scrolling when the mobile menu is open */
   .no-scroll {
     overflow: hidden;
   }

   /* Gradient Border Color */
   .footer-border-top {
     border-image-source: linear-gradient(180deg, #00d2ff 0%, #059dbe 100%);
     border-image-slice: 1;
   }
   ```

7. Create a home page all components
   - Setup page layout in `App.tsx` and crate `icon.tsx`.
   - Create `Hero` Section. add `hero-bg` _tailwind.config_
   - ProblemSolution
   - Reviews
   - Partners
   - Faq
   - Note
