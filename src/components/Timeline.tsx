import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar. 2022 - May 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Engineer, Intelligent Creation Platform</h3>
            <h4 className="vertical-timeline-element-subtitle">ByteDance Ltd., Guangzhou, China</h4>
            <p>
              • Managed a team to develop public cloud, mobile APPs, billing and metering systems for B2B customers in a SaaS platform;
              <br />
              • Optimized 2B customers’ calls to service interfaces, allowing customers to use the APPs smoothly;
              <br />
              • Built user behavior data warehouse and made analyses; upgraded billing and metering systems.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug. 2019 - Feb. 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Zao’an Technology Co., Ltd., Guangzhou, China</h4>
            <p>
              • Assisted in developing and improving microservice framework with gRPC and K8s, leading to a peak registration of 3 million users;
              <br />
              • Deployed software services in the cloud; redesigned Instant Messaging System to support 500k DAUs.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;