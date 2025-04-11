function SkillItems({ Icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <Icon className="text-3xl sm:text-4xl" />
      <p className="hidden sm:inline">{label}</p>
    </div>
  );
}

export default SkillItems;
