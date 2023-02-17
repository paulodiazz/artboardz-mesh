
const BillboardSection = () => {
  return (
    <section className="text-white font-Montserrat p-5 font-medium mb-8">
      <article className="space-y-5">
        <h1 className="  text-[40px] text-center tracking-wide px-3">
          Replacing Billboards with Art
        </h1>

        <p className="text-center text-base tracking-wide text-[18px]">
          Artboardz works with street artists to combine NFT art with physical
          art to beautify cities, replacing billboards with art. This innovative
          approach is tailored to support artists in the onboarding process
          bringing them into the digital ecosystem, promoting their art, and
          helping brand Cardano simultaneously. These initiatives are fully
          funded through the sale of Cardano NFTs, and royalties go to the
          artists.
        </p>

        <p className="text-center text-base tracking-wide text-[18px] ">
          Through NFTs, local artists can access global buyers and collectors to
          bring color and life to their cities with street art. While physical
          images might disappear one day, the digital versions will always
          survive, allowing the owners to enjoy their beauty and the artist to
          receive royalties on sales, which they were never able to do before.
        </p>

        <div className="">
          <iframe
            className=" w-full lg:w-[700px] aspect-video  mx-auto mt-12"
            src="https://www.youtube.com/embed/pPVyCC7sbyM"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </article>
    </section>
  );
};

export default BillboardSection;
