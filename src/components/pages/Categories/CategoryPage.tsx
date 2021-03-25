import React, { ChangeEvent, FC, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { categoriesMap, QUERY_KEYS } from '../../../constants';
import { OpType } from '../../../types';
import CategoryName from './CategoryName';

const CategoryPage: FC = () => {
  const { id, type } = useParams<{ id: string; type: OpType }>();

  const { data: categories } = useQuery(
    [QUERY_KEYS.categories, type],
    categoriesMap[type],
    {
      enabled: type !== undefined,
    },
  );

  const category = categories?.find((cat) => cat.id === id);

  return (
    <div className="flex flex-col p-4">
      {category?.name && <CategoryName name={category.name} />}
    </div>
  );
};

export default CategoryPage;
