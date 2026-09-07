import { ProjectStatus as ProjectStatusType } from "@/types/project";

type Props = {
  status: ProjectStatusType;
};

export default function ProjectStatus({ status }: Props) {
  const statusConfig = {
    live: {
      label: "LIVE",
      dot: "bg-emerald-500",
      ping: true,
    },
    local: {
      label: "LOCAL",
      dot: "bg-amber-500",
      ping: false,
    },
    private: {
      label: "PRIVÉ",
      dot: "bg-neutral-400 dark:bg-neutral-500",
      ping: false,
    },
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/80 px-3 py-1.5 text-xs font-semibold tracking-wider text-neutral-900 shadow-md backdrop-blur-md dark:border-neutral-700/50 dark:bg-neutral-900/80 dark:text-white">
      <span className="relative flex h-2 w-2">
        {config.ping && (
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${config.dot} opacity-75`} />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${config.dot}`} />
      </span>
      {config.label}
    </div>
  );
}