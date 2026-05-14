/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import { useParams } from 'react-router-dom';
import PortfolioDetail from 'parts/PortfolioDetail';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

import { Portfolios } from 'json/landingPageData';

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const detailData = Portfolios.filter((item) => item.id === id);
  const project = detailData[0];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title={project ? `${project.title} — Case Study` : 'Case Study'}
        description={
          project
            ? `Discover how Streamivus delivered ${project.title} — ${project.type}.`
            : 'A project delivered by Streamivus.'
        }
        path={`/case-studies/${id}`}
      />
      <Header />
      <PortfolioDetail data={detailData.length === 1 ? [detailData[0]] : null} />
      <Footer />
    </>
  );
};
