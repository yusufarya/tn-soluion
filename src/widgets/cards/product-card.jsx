import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function ProductCard({ img, name, text, url }) {
  return (
    <Card color="transparent" shadow={false} className="text-left shadow-lg p-3">
      <Avatar
        src={img}
        alt={name}
        size="lg"
        variant="square"
        className="h-full w-full shadow-lg shadow-gray-500/25 border-t-2 border-b-2 border-blue-600"
      />
      <Typography variant="h6" color="blue-gray" className="mt-6 mb-1">
        - {name}
      </Typography>
      {text && (
        <Typography variant="small" className="font-body text-gray-800 italic">
          "{text}"
        </Typography>
      )}
      {url && <div className="mt-2 text-left text-blue-800">{url}</div>}
    </Card>
  );
}

ProductCard.defaultProps = {
  text: "",
  url: null,
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.node,
};

ProductCard.displayName = "/src/widgets/layout/team-card.jsx";

export default ProductCard;
