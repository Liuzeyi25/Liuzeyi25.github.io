const TRACKER_HOST_ID = "mapmyvisitors-tracker-host";
const TRACKER_SCRIPT_ID = "mmvst_globe";
const TRACKER_SCRIPT_URL =
  "https://mapmyvisitors.com/globe.js?d=13jUMirMAJnP2c1fsQX0pFNeS3qvzUU11sSoac1KKp0";

const TRACKER_LOADER = `(() => {
  if (window.location.hostname !== "liuzeyi25.github.io") return;
  if (document.getElementById("${TRACKER_SCRIPT_ID}")) return;

  const host = document.getElementById("${TRACKER_HOST_ID}");
  if (!host) return;

  const script = document.createElement("script");
  script.id = "${TRACKER_SCRIPT_ID}";
  script.src = "${TRACKER_SCRIPT_URL}";
  script.async = false;
  host.appendChild(script);
})();`;

export function MapMyVisitorsTracker() {
  return (
    <div
      id={TRACKER_HOST_ID}
      className="mapmyvisitors-tracker"
      aria-hidden="true"
      suppressHydrationWarning
    >
      <script
        id="mapmyvisitors-loader"
        dangerouslySetInnerHTML={{ __html: TRACKER_LOADER }}
      />
    </div>
  );
}
