import React from "react";
import FeatureCard from "./FeatureCard";
import { Dictionary } from "@/lib/dictionary";
import {
  Users,
  AlarmClock,
  BarChart3,
  Contact2,
  Mail,
  Smartphone,
  ShieldCheck,
  Settings2,
} from "lucide-react";

interface FeaturesGridProps {
  dict: Dictionary;
  className?: string;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({
  dict,
  className = "",
}) => {
  const items = [
    {
      icon: <Users className="w-7 h-7" />,
      title: dict.feature_team_collab_title,
      description: dict.feature_team_collab_desc,
    },
    {
      icon: <AlarmClock className="w-7 h-7" />,
      title: dict.feature_task_automation_title,
      description: dict.feature_task_automation_desc,
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: dict.feature_reports_title,
      description: dict.feature_reports_desc,
    },
    {
      icon: <Contact2 className="w-7 h-7" />,
      title: dict.feature_customer_mgmt_title,
      description: dict.feature_customer_mgmt_desc,
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: dict.feature_email_integration_title,
      description: dict.feature_email_integration_desc,
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: dict.feature_mobile_app_title,
      description: dict.feature_mobile_app_desc,
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: dict.feature_advanced_security_title,
      description: dict.feature_advanced_security_desc,
    },
    {
      icon: <Settings2 className="w-7 h-7" />,
      title: dict.feature_full_customization_title,
      description: dict.feature_full_customization_desc,
    },
  ];

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}
    >
      {items.map((item, idx) => (
        <FeatureCard
          key={idx}
          icon={item.icon}
          title={item.title}
          description={item.description}
          className="hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-out"
        />
      ))}
    </div>
  );
};

export default FeaturesGrid;
