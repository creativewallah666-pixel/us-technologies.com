import { Route as rootRoute } from "@/routes/__root";
import AboutPage from "@/routes/about";
import ApplicationsPage from "@/routes/applications";
import BenefitsPage from "@/routes/benefits";
import ContactPage from "@/routes/contact";
import IndexPage from "@/routes/index";
import ProductsPage from "@/routes/products";
import TestimonialsPage from "@/routes/testimonials";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product",
  component: ProductsPage,
});
const benefitsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/benefits",
  component: BenefitsPage,
});
const testimonialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/testimonials",
  component: TestimonialsPage,
});
const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: ApplicationsPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  productRoute,
  benefitsRoute,
  testimonialsRoute,
  galleryRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
