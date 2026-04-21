import React from "react";
import { Card, CardBody } from "reactstrap";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({
  name,
  desc,
  github,
  link,
  image,
}: ProjectType) => {
  return (
    <div className="col-md-6 mb-4">
      <Card className="shadow-sm border-0 rounded-4 project-card-white">
        
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="img-fluid w-100 project-img"
        />

        <CardBody>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bold text-dark mb-0">{name}</h5>

            {/* FA Logos */}
            <div className="d-flex gap-3">
              <i className="fab fa-react text-info tech-icon"></i>
              <i className="fab fa-node-js text-success tech-icon"></i>
              <i className="fas fa-database text-success tech-icon"></i>
            </div>
          </div>

          <p className="text-dark mt-3 small">
            {desc}
          </p>

          <div className="mt-3 d-flex gap-4">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary small fw-semibold"
              >
                <i className="fa fa-arrow-up-right-from-square me-1"></i>
                Live Demo
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary small fw-semibold"
              >
                <i className="fab fa-github me-1"></i>
                GitHub
              </a>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectsCard;