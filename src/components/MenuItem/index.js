import React from "react";
import { LinkArea, LinkIcon } from "./styled";

export default ({ icon, link }) => {
  return (
    <LinkArea href={link}>
      <LinkIcon src={icon} />
    </LinkArea>
  );
};
