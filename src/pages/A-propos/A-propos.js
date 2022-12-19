import styles from "./A-propos.module.scss";
import Collapse from "../../components/Collapse/Collapse";
import { dataSection } from "../../data/dataSection";
import Banner from "../../components/BannerPropos/BannerPropos";

function ProposPage() {
  const sectionData = dataSection;

  return (
    <div className="flex-fill">
      <Banner className={styles.containerBanner} />
      {sectionData.map((r) => (
        <Collapse key={r.id} title={r.title} text={r.text} />
      ))}
    </div>
  );
}
export default ProposPage;
