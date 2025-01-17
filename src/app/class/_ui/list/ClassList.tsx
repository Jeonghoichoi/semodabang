import { ClassCard, Class } from '@/entities/Class';
import { getClasses } from '@/shared/api/classApi';

export const ClassList: any = async () => {
  const classes = await getClasses();

  return (
    <div className="px-4 pt-4 pb-20">
      {classes.map((classItem: Class) => (
        <ClassCard
          key={classItem.id}
          classItem={classItem}
        />
      ))}
    </div>
  );
};
