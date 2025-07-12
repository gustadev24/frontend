import { DataTable } from '@/modules/core/ui/data-table';
import type { CourseModule } from '@/modules/courses/types/courses';
import { columns } from '@/modules/courses/admin/components/columns-modules';

interface ModulesTableProps {
  modules: CourseModule[];
}

function ModulesTable({ modules }: ModulesTableProps) {
  return <DataTable data={modules} columns={columns} />;
}

export { ModulesTable };
