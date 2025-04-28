import ourApproach from "../assets/images/ourapproach.webp";

const OurApproach = () => {
  return (
    <section>
      <div className="paddingtop paddingbottom wrapper grid lg:grid-cols-2 gap-10">
        <div>
          <h3
            data-aos="fade-right"
            className="text-[32px] text-primary font-bold"
          >
            Our Approach
          </h3>
          <p className="desc mt-4 space-y-4" data-aos="fade-right">
            At CodeSmasher, we believe in delivering innovative solutions that
            drive growth. Our approach is built on collaboration, transparency,
            and a commitment to excellence. Here's how we work:
            <br />
            <br />
            <strong>1. In-Depth Discovery:</strong>
            <br />
            We begin by understanding your vision, objectives, and unique
            challenges. Through in-depth discovery sessions, we gather insights
            to ensure that we align our strategy with your business goals,
            paving the way for a successful partnership.
            <br />
            <br />
            <strong>2. Tailored Strategy:</strong>
            <br />
            Once we have a clear understanding, we develop a custom strategy
            designed to address your specific needs. We focus on innovation,
            ensuring that every solution we create is not only effective but
            also scalable for future growth.
            <br />
            <br />
            <strong>3. Collaborative Development:</strong>
            <br />
            Our development process is deeply collaborative. We involve you at
            every stage, making sure your feedback shapes the solution. This
            iterative approach ensures that the final product meets your exact
            expectations.
            <br />
            <br />
            <strong>4. Rigorous Testing:</strong>
            <br />
            Quality is at the core of everything we do. Before deployment, we
            conduct extensive testing to ensure that our solutions are reliable,
            secure, and perform at their best across all devices and platforms.
            <br />
            <br />
            <strong>5. Long-Term Partnership:</strong>
            <br />
            Our relationship doesn’t end with project delivery. We offer ongoing
            support and continuous improvement to ensure that your solution
            adapts and thrives as your business evolves.
          </p>
        </div>
        <img
          data-aos="fade-left"
          className="h-full object-cover"
          src={ourApproach}
          alt="Our Approach"
        />
      </div>
    </section>
  );
};

export default OurApproach;
