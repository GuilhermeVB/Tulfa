import Button from "../../components/button/Button";
import Frame from "../../components/frame/Frame";

function Companies() {
  return (
    <div className="companies_animation_container">
      <section className="companies_container">
        <h2 className="companies_heading">
          Trusted by top Fortune 500 clients from around the world
        </h2>
        <div className="companies_carousel">
          <Frame section="companies" source="./images/companies/company_1.png" alt="Company logo" />
          <Frame section="companies" source="./images/companies/company_2.png" alt="Company logo" />
          <Frame section="companies" source="./images/companies/company_3.png" alt="Company logo" />
          <Frame section="companies" source="./images/companies/company_4.png" alt="Company logo" />
          <Frame section="companies" source="./images/companies/company_5.png" alt="Company logo" />
          <Frame section="companies" source="./images/companies/company_6.png" alt="Company logo" />
          <Frame section="companies" source="./images/companies/company_7.png" alt="Company logo" />
          <Frame section="companies" source="./images/companies/company_8.png" alt="Company logo" />
        </div>
        <Button content="Who We Work With" color="secondary" specification="mt_10" />
      </section>
    </div>
  );
}

export default Companies;
