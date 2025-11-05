// components/common/TechIcon.jsx
import React from "react";
import {
  DiPython, 
  DiMysql,
  DiPostgresql,
} from "react-icons/di";
import { BiSignal3, BiBarChartSquare } from "react-icons/bi";
import {
  FaFigma,
  FaChartBar,
  FaGithub,
  FaTable,
  FaDatabase,
  FaPaintBrush,
  FaBinoculars,
  FaWrench,
  FaMedal,
  FaStar,
} from "react-icons/fa";
import {
  SiTableau,
  SiJupyter,
  SiDatabricks,
  SiCanva,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiInkscape,
  SiPandas,
} from "react-icons/si";
import { FiBarChart2, FiDatabase as FiDatabaseProcess } from "react-icons/fi";
import { GiMagicBroom, GiPowerLightning  } from "react-icons/gi";
import { MdOutlinePivotTableChart, MdSchema, MdQueryStats } from "react-icons/md";
import { RiFormula } from "react-icons/ri";
import { PiCardsFill } from "react-icons/pi";
import Tooltip from "../common/Tooltip";


// --- Icon maps ---
const toolIconMap = {
  python: DiPython,
  sql: FaDatabase,
  mysql: DiMysql,
  postgresql: DiPostgresql,
  spark: FaDatabase,
  powerbi: BiSignal3,
  tableau: SiTableau,
  excel: FaTable,
  jupyter: SiJupyter,
  pandas: SiPandas,
  databricks: SiDatabricks,
  github: FaGithub,
  figma: FaFigma,
  canva: SiCanva,
  illustrator: SiAdobeillustrator,
  photoshop: SiAdobephotoshop,
  inkscape: SiInkscape,
  picsart: FaChartBar,
  chart: BiBarChartSquare,
  pivottable: MdOutlinePivotTableChart,
  excelformula: RiFormula,
  kpi: PiCardsFill,
  lookup: FaBinoculars,
  powerquery: GiPowerLightning,
  powerpivot: MdOutlinePivotTableChart,
  starschema: FaStar,
  medallionarchitecture: FaMedal,
};

// --- Process icon map ---
const processIconMap = {
  datavisualization: FiBarChart2,
  dashboarding: FiBarChart2,
  reporting: FiBarChart2,
  datacleaning: GiMagicBroom,
  dataanalysis: FiDatabaseProcess,
  branding: FaPaintBrush,
  featureengineering: FaWrench,
  datamodeling: MdSchema,
  eda: MdQueryStats,
};

const TechIcon = ({ name, size = 26, className = "" }) => {
  const key = name.toLowerCase().trim().replace(/\s/g, "");

  const IconComponent =
    toolIconMap[key] || processIconMap[key] || null;

  let iconEl = null;

  if (IconComponent) {
    iconEl = <IconComponent size={size} />;
  }
  else {
    iconEl = (
      <span className="text-xs opacity-75 font-medium">{name}</span>
    );
  }

  return (
    <Tooltip label={name} side="bottom">
    <span
      key={name}
      className={`
        inline-flex items-center justify-center
        text-accent-primary hover:text-accent-secondary
        dark:text-accent-secondary dark:hover:text-accent-primary
        transition-all duration-300 ${className}
      `}
    >
      {iconEl}
    </span>
    </Tooltip>
  );
};

export default TechIcon;
