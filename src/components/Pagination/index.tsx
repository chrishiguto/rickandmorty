import React, { useCallback } from 'react'
import { ChevronLeft, ChevronRight } from '@styled-icons/feather'

import * as S from './styles'

export type PaginationProps = {
  prev: number | null
  next: number | null
  pages: number
  activePage: number
  onChange: (value: number) => void
}

type PageProps = {
  page: number
  isActive?: boolean
  onClick: () => void
}

const Page = ({ isActive, page, onClick }: PageProps) => (
  <S.Page isActive={!!isActive}>
    <S.PageButton onClick={onClick}>{page}</S.PageButton>
  </S.Page>
)

const More = () => (
  <S.Page>
    <S.PageInterval>...</S.PageInterval>
  </S.Page>
)

const Pagination = ({
  prev,
  next,
  pages,
  activePage,
  onChange
}: PaginationProps) => {
  const range = useCallback(
    (min: number, max: number) =>
      Array.from({ length: max - min + 1 }, (_, i) => min + i),
    []
  )

  const startPage = Math.max(2, activePage - 1)
  const endPage = Math.min(pages - 1, activePage + 1)
  const pagesToRender = range(startPage, endPage)

  const hasLeftPages = () => startPage > 2
  const hasRightPages = () => pages - endPage > 1

  const handleFirstPage = () => onChange(1)
  const handleLastPage = () => onChange(pages)

  const renderPagination = (
    hasLeftPages: boolean,
    hasRightPages: boolean,
    pagesToRender: number[],
    pages: number
  ) => (
    <>
      {hasLeftPages && !hasRightPages && (
        <>
          <Page
            page={1}
            isActive={1 === activePage}
            onClick={handleFirstPage}
          />
          <More />
          {pagesToRender.map((page) => (
            <Page
              key={page}
              page={page}
              isActive={page === activePage}
              onClick={() => onChange(page)}
            />
          ))}
          <Page
            page={pages}
            isActive={pages === activePage}
            onClick={handleLastPage}
          />
        </>
      )}
      {!hasLeftPages && hasRightPages && (
        <>
          <Page
            page={1}
            isActive={1 === activePage}
            onClick={handleFirstPage}
          />
          {pagesToRender.map((page) => (
            <Page
              key={page}
              page={page}
              isActive={page === activePage}
              onClick={() => onChange(page)}
            />
          ))}
          <More />
          <Page
            page={pages}
            isActive={pages === activePage}
            onClick={handleLastPage}
          />
        </>
      )}
      {hasLeftPages && hasRightPages && (
        <>
          <Page
            page={1}
            isActive={1 === activePage}
            onClick={handleFirstPage}
          />
          <More />
          {pagesToRender.map((page) => (
            <Page
              key={page}
              page={page}
              isActive={page === activePage}
              onClick={() => onChange(page)}
            />
          ))}
          <More />
          <Page
            page={pages}
            isActive={pages === activePage}
            onClick={handleLastPage}
          />
        </>
      )}
      {!hasLeftPages && !hasRightPages && (
        <Page page={1} isActive={1 === activePage} onClick={handleFirstPage} />
      )}
    </>
  )

  return (
    <S.Wrapper>
      <S.ArrowButton
        aria-label="Previous page button"
        onClick={prev === null ? undefined : () => onChange(prev)}
        disabled={prev === null}
      >
        <ChevronLeft size={24} strokeWidth={2} />
      </S.ArrowButton>
      <S.Pages>
        {renderPagination(
          hasLeftPages(),
          hasRightPages(),
          pagesToRender,
          pages
        )}
      </S.Pages>
      <S.ArrowButton
        aria-label="Next page button"
        onClick={next === null ? undefined : () => onChange(next)}
        disabled={next === null}
      >
        <ChevronRight size={24} strokeWidth={2} />
      </S.ArrowButton>
    </S.Wrapper>
  )
}

export default Pagination
