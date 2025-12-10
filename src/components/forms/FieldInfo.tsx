import type { AnyFieldApi } from '@tanstack/react-form';

export function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {!field.state.meta.isValid && (
        <em role="alert" className="text-sm text-red-500">
          {field.state.meta.errors.flatMap(e => e.message).join(', ')}
        </em>
      )}
    </>
  );
}
