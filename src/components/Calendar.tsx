export default function Calendar() {
  return (
    <div className="min-h-screen px-6 md:px-16 py-12">
      <div className="w-full h-[700px]">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=YXV4d29ya3Nob3BAZ21haWwuY29t"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}