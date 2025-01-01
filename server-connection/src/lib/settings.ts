export const ITEM_PER_PAGE = 10;

type RouteAccessMap = {
  [key: string]: string[];
};

export const routeAccessMap: RouteAccessMap = {
  "/dashboard/admin( .* )": ["admin"],
  "/dashboard/student( .* )": ["student"],
  "/dashboard/teacher( .* )": ["teacher"],
  "/dashboard/parent( .* )": ["parent"],
  "/dashboard/list/teachers": ["admin", "teacher"],
  "/dashboard/list/students": ["admin", "teacher"],
  "/dashboard/list/parents": ["admin", "teacher"],
  "/dashboard/list/subjects": ["admin"],
  "/dashboard/list/classes": ["admin", "teacher"],
  "/dashboard/list/exams": ["admin", "teacher", "student", "parent"],
  "/dashboard/list/assignments": ["admin", "teacher", "student", "parent"],
  "/dashboard/list/results": ["admin", "teacher", "student", "parent"],
  "/dashboard/list/attendance": ["admin", "teacher", "student", "parent"],
  "/dashboard/list/events": ["admin", "teacher", "student", "parent"],
  "/dashboard/list/announcements": ["admin", "teacher", "student", "parent"],
};
