import { HeartbeatLoader } from "@/components/ui/heartbeat-loader"

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <HeartbeatLoader size="lg" showText text="Loading NeoTrueNorth..." />
    </div>
  )
}
