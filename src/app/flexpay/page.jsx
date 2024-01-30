import React from "react";
import Image from "next/image";
import Overlap  from "./sections/Overlap/Overlap.jsx";
import OverlapGroup  from "./sections/OverlapGroup/OverlapGroup.jsx";
import OverlapWrapper  from "./sections/OverlapWrapper/OverlapWrapper.jsx";
import styles from "./style.module.css";

export default function Flexpay() {
  return (
    <div className={styles.slide}>
      <div className={styles["div-2"]}>
        <Overlap />
        <div className={styles["text-wrapper-5"]}>Research and Analysis</div>
        <div className={styles["text-wrapper-6"]}>Competitive analysis</div>
        <div className={styles["text-wrapper-7"]}>Quantitative analysis</div>
        <p className={styles["in-this-project-i"]}>
          In this project i had choose to study competition and decode how they design their website to getting major
          user engagement, <br />
          Then talking to target Users and figure out what kind of information they are looking for in website and how
          they make sense of information <br />
          provided to them and take action to complete what they trying to archive with website
        </p>
        <p className={styles["looking-for-online"]}>
          looking for online review of product and deciding who are providing best service and attracting more user
          through their website with tools like <br />
          semrush , or any other seo tool.
        </p>
        <p className={styles["p"]}>
          In order to shortlist sites I have decided to go with amount of user visiting this website and how well design
          their website they have
        </p>
        <p className={styles["text-wrapper-8"]}>Through analysis I have left with 4 sites to decode</p>
        <p className={styles["text-wrapper-9"]}>Selecting 2 sites to decode Lazy pay and Money view</p>
        <div className={styles["text-wrapper-10"]}>Lazypay</div>
        <OverlapGroup />
        <div className={styles["text-wrapper-11"]}>lazy pay</div>
        <div className={styles["text-wrapper-12"]}>Zest</div>
        <OverlapWrapper />
        <div className={styles["text-wrapper-13"]}>Home Credit</div>
        <div className={styles["rectangle"]} />
        <div className={styles["text-wrapper-14"]}>Lazy Pay</div>
        <div className={styles["text-wrapper-15"]}>Money view</div>
        <div className={styles["text-wrapper-16"]}>Zest</div>
        <div className={styles["text-wrapper-17"]}>Home Credit</div>
        <p className={styles["sometimes-when-you"]}>
          Sometimes, when you least expect it, a situation arises that requires you to urgently arrange <br />
          for a certain sum of money, which you may not have at your disposal. In such situations, <br />
          when there is absolutely no time to lose, an instant loan can provide you with the perfect financial boost in
          the most convenient and hassle-free manner. <br />
          Instant loans can be used for any purpose like house repairing, parties, travel, or for emergency.
        </p>
        <p className={styles["text-wrapper-18"]}>Reason to Take Quick loans (Online Blogs and Articles)</p>
        <p className={styles["text-wrapper-19"]}>Most Asked Question About Quick loans (Online Blogs and Articles)</p>
        <p className={styles["text-wrapper-20"]}>
          Instant loans are very helpful when we have sudden money problems in an unexpected situation. Instant loans
          can be used for any purpose like house repairing, parties, travel or for an emergency situation. There is no
          restriction for the loan usage. The name itself satisfies that instant loans are taken for instant situations.
          This can be taken without disturbing the regular deposit or savings. The repayment amount of loan depends on
          the financial status of the person who takes loan and the period of time.
        </p>
        <p className={styles["element-what-is-a-quick"]}>
          1. What is a quick loan app?
          <br />
          2. Who can take a quick loan?
          <br />
          3. What are the documents required for a quick loan app?
          <br />
          4. Is it safe to use a quick loan app?
          <br />
          5. How do you apply for such a loan?
          <br />
          6. Where can I find a quick loan app?
          <br />
          7. What can I use a quick loan app for?
          <br />
          8. How long are the repayment tenures?
        </p>
        <div className={styles["text-wrapper-21"]}>Conclusion</div>
        <div className={styles["text-wrapper-22"]}>Key Goals</div>
        <div className={styles["text-wrapper-23"]}>Road Map</div>
        <div className={styles["text-wrapper-24"]}>Branding Color and Font</div>
        <div className={styles["text-wrapper-25"]}>Final Design</div>
        <p className={styles["text-wrapper-26"]}>
          Conclusion are Based on online Research from people writing their reason and problem on platform like reddit
          and quora
        </p>
        <p className={styles["text-wrapper-27"]}>User’s primary motive to take quick loan is in emergency situation.</p>
        <p className={styles["text-wrapper-28"]}>
          User fill flustered if things are radically different it makes difficult for user’s to find what they looking
          for. (due to mental models)
        </p>
        <p className={styles["text-wrapper-29"]}>
          landing page of website need to clear in providing information in fewer steps possible .
        </p>
        <p className={styles["compotator-s"]}>
          Compotator&#39;s targeting user’s problem by providing them solutions and answers.
        </p>
        <p className={styles["text-wrapper-30"]}>
          Gen-Z user’s have lowest attention span and tend to compare when choosing service
        </p>
        <p className={styles["text-wrapper-31"]}>
          Provide information that our target User will understand without any confusion and hassle
        </p>
        <p className={styles["adding-element-that"]}>Adding Element that Gain User’s Attention &amp; Trust</p>
        <p className={styles["text-wrapper-32"]}>Has Unique Differentiation than Competitor’s website</p>
        <p className={styles["text-wrapper-33"]}>Information has to be understandable in few sentence</p>
        <Image width={2885} height={14914} className={styles["final-design"]} alt="Final design" src="/img/website.png" />
        <Image width={1920} height={1080} className={styles["group-4"]} alt="Group" src="/img/group-1000004932.png" />
        <Image width={1920} height={1080} className={styles["group-5"]} alt="Group" src="/img/group-1000004934.png" />
        <Image width={1920} height={1080} className={styles["group-6"]} alt="Group" src="/img/group-1000004941.png" />
        <Image width={1920} height={1080} className={styles["group-7"]} alt="Group" src="/img/group-1000004940.png" />
        <Image width={1920} height={1080} className={styles["group-8"]} alt="Group" src="/img/group-19.png" />
        <Image width={1920} height={1080} className={styles["group-9"]} alt="Group" src="/img/group-59.png" />
        <Image width={1920} height={1080} className={styles["group-10"]} alt="Group" src="/img/group-1000004942.png" />
      </div>
    </div>
  );
};