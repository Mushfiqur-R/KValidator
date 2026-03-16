import FAQItem from "./Cards/FAQCards";


const faqs = [
  {
    question: "What is the minimum stake?",
    answer: "100M KROWN for full validators. 10K KROWN for shared nodes.",
  },
  {
    question: "Can I operate multiple validators?",
    answer: "Yes. You can run multiple validator nodes and join multiple shared nodes using the same wallet.",
  },
  {
    question: "How often are rewards distributed?",
    answer: "Rewards are distributed every epoch, approximately every 24 hours.",
  },
  {
    question: "Can shared node participants unstake partially?",
    answer: "Yes, partial unstaking is supported for shared node participants.",
  },
  {
    question: "What fees are charged?",
    answer: "Platform fee is 0% for self-hosted, 10% of rewards for managed validators, and 10% + 2-5% manager fee for shared nodes.",
  },
  {
    question: "Can I change validator type later?",
    answer: "Yes, you can migrate between validator types subject to unbonding periods.",
  },
  {
    question: "What is the unbonding period?",
    answer: "The unbonding period is 21 days for all validator types.",
  },
  {
    question: "What happens during downtime?",
    answer: "Validators may receive reduced rewards during downtime. Managed validators are monitored and maintained by Krown.",
  },
];

export default function FAQ() {
  return (
    <section className="flex flex-col items-center px-4 py-20 gap-10">

      {/* Heading */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="font-grotesk font-medium text-[40px] leading-tight tracking-[-0.02em] text-white">
          Frequently Asked Questions
        </h2>
        <p
          className="font-vietnam font-medium text-[18px] leading-[30px] text-[#AAB3D0]"
          style={{ letterSpacing: "-0.04em" }}
        >
          Quick answers to the most common validator onboarding questions.
        </p>
      </div>

      {/* FAQ List */}
      <div className="flex flex-col gap-4 w-full max-w-[767px]">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>

    </section>
  );
}