"use client";

import {
  ClockCircleOutlined,
  HomeOutlined,
  MailOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import AppShell from "../../components/layout/AppShell";

export default function ComingSoonPage() {
  return (
    <AppShell activeKey="" searchPlaceholder="">
      <main className="flex-1 flex items-center justify-center min-h-screen bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-8">
        <div className="max-w-2xl w-full text-center">
          {/* Main Content */}
          <div className="mb-12">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ClockCircleOutlined className="text-4xl text-primary" />
            </div>
            <h1 className="font-h1 text-h1 text-primary mb-4">Coming Soon</h1>
            <p className="text-body-base text-on-surface-variant mb-8 max-w-lg mx-auto">
              This feature is currently under development. We're working hard to bring you the best experience. 
              Stay tuned for updates!
            </p>
          </div>

          {/* Feature Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20">
              <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mx-auto mb-4">
                <NotificationOutlined className="text-primary text-xl" />
              </div>
              <h3 className="font-label-md text-label-md text-on-surface mb-2">Get Notified</h3>
              <p className="text-body-sm text-on-surface-variant">
                Be the first to know when this feature launches
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20">
              <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mx-auto mb-4">
                <MailOutlined className="text-primary text-xl" />
              </div>
              <h3 className="font-label-md text-label-md text-on-surface mb-2">Beta Access</h3>
              <p className="text-body-sm text-on-surface-variant">
                Request early access to test new features
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20">
              <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mx-auto mb-4">
                <ClockCircleOutlined className="text-primary text-xl" />
              </div>
              <h3 className="font-label-md text-label-md text-on-surface mb-2">Timeline</h3>
              <p className="text-body-sm text-on-surface-variant">
                Check our development roadmap and progress
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              type="primary" 
              size="large"
              className="px-8 py-3 bg-primary text-on-primary font-label-md rounded-lg shadow-sm hover:brightness-110 active:scale-95 transition-all"
              onClick={() => window.location.href = "/dashboard"}
            >
              <HomeOutlined className="mr-2" />
              Back to Dashboard
            </Button>
            
            <Button 
              size="large"
              className="px-8 py-3 border border-outline text-on-surface font-label-md rounded-lg hover:bg-surface-container-low transition-all"
            >
              <MailOutlined className="mr-2" />
              Notify Me
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-primary-container/10 rounded-xl border border-primary/20">
            <h3 className="font-label-md text-label-md text-primary mb-3">Need Help?</h3>
            <p className="text-body-sm text-on-surface-variant mb-4">
              If you have urgent questions or need assistance with other features, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                className="bg-primary text-on-primary"
                onClick={() => window.location.href = "/profile"}
              >
                Contact Support
              </Button>
              <Button 
                className="border border-primary text-primary"
                onClick={() => window.location.href = "/dashboard"}
              >
                Explore Other Features
              </Button>
            </div>
          </div>
        </div>
      </main>
    </AppShell>
  );
}
