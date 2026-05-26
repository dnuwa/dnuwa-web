import Intro from "@/containers/Intro";
import Testimonials from "@/containers/Testimonials"
import Solutions from "@/containers/Solutions"
import Products from "@/containers/Products";
import Blogs from "@/containers/Blogs";
import ContactUs from "@/containers/ContactUs";

export default function Home() {
  return (
    <>
      <Intro />
      <Testimonials />
      <Solutions />
      <Products />
      <Blogs />
      <ContactUs />
    </>
  );
}
