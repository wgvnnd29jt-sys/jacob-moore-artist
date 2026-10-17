import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site-frame";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About Jacob Moore — Pacific Northwest Metal Artist",
      description:
        "Raised at the confluence of the mighty Columbia River and powerful North Pacific Ocean, Jacob Moore draws inspiration from a coastline shaped by shifting seasons.",
      path: "/about",
      pageType: "ProfilePage",
    }),
  component: About,
});

function About() {
  return (
    <SiteFrame>
      <div className="page frame">
        <article className="essay">
          <h1 className="display page-title">About</h1>
          <p>
            Raised at the confluence of the mighty Columbia River and powerful North Pacific Ocean, Jacob Moore draws inspiration from a coastline shaped by shifting seasons—where ruggedness meets elegance in the midst of unstoppable powers of nature.
          </p>
          <p>
            His work in aquaculture, agriculture, and environmental sciences has deepened his connection to the land and water. A surfer, fisherman, and forager, he finds inspiration in the textures, forms, and rhythms of his surroundings.
          </p>
          <p>
            His art brings these experiences together, giving form to a life lived close to the coast.
          </p>
          <Link className="btn" to="/contact">
            Contact
          </Link>
        </article>
      </div>
    </SiteFrame>
  );
}
