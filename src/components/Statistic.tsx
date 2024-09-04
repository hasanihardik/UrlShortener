import Card from './Card';
import BrandImg from '../assets/icon-brand-recognition.svg';
import DetailedImg from '../assets/icon-detailed-records.svg';
import CustomImg from '../assets/icon-fully-customizable.svg';

const Statistic = () => {
  return (
    <section className="statistics">
      <div className="container">
        {/* Stat Title */}
        <div className="statistics__title">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {/* Cards */}
        <div className="statistics__cards">
          {/* Card */}
          <Card
            image={BrandImg}
            className="brand"
            alt="Brand Image"
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />

          <Card
            image={DetailedImg}
            className="detailed"
            alt="Detailed Records"
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />

          <Card
            image={CustomImg}
            alt="Fully Customizable"
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </section>
  );
};

export default Statistic;
