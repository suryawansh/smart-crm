import { PageHeader } from "@/components/ui/PageHeader";

import React from "react";

const PlaceHolderPage = () => {
  return (
    <PageHeader
      title={"Page Header"}
      description={
        "This is a placeholder description to test the style of this component: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nibh sollicitudin libero porta interdum ac vel urna. Quisque a ipsum leo. Curabitur tristique ut erat sed ultrices. Nulla laoreet porttitor aliquam. Donec ut sodales nisl, at volutpat nisl. Maecenas tortor mi, hendrerit quis eros at, porttitor scelerisque eros. Suspendisse ligula nisi, pretium quis vestibulum vel, iaculis sit amet nisl. Integer id nibh dolor. Vivamus ut fermentum tellus, in mollis nisl. In quis venenatis ante, a tempor dui. Integer dapibus arcu quis mauris varius, dignissim pharetra arcu auctor. Maecenas id imperdiet odio. In sit amet efficitur arcu. Suspendisse potenti. Nam in diam dui. "
      }
    >
      <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
        Action button
      </button>

      <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
        Action button
      </button>
    </PageHeader>
  );
};

export default PlaceHolderPage;
