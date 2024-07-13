// components
import { RatingTable } from "@/entities/rating";
import { TypographyH2 } from "@/shared/ui/typography";

const Rating = () => {
  return (
    <section className="space-y-6">
      <div className="flex gap-6 items-center justify-between">
        <div>
          <TypographyH2>Рейтинг</TypographyH2>
        </div>
      </div>
      <RatingTable />
    </section>
  );
};

export default Rating;
