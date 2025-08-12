export function useVirtualScroller<T>(
  allItems: Ref<T[] | null | undefined>,
  itemsPerPage = 6,
  threshold = 0.5,
) {
  const lastItem = ref<HTMLElement | null>(null);
  const currentPage = ref(1);

  const visibleItems = computed(() => {
    return (allItems.value || []).slice(0, currentPage.value * itemsPerPage);
  });

  function loadMore() {
    if (allItems.value && visibleItems.value.length < allItems.value.length) {
      currentPage.value++;
    }
  }

  function setLastItemRef(el: Element | ComponentPublicInstance | null, index: number) {
    if (index === visibleItems.value.length - 1 && el) {
      const element = (el as ComponentPublicInstance)?.$el ?? el;
      lastItem.value = element as HTMLElement;
    }
  }

  useIntersectionObserver(
    lastItem,
    ([entry]) => {
      if (entry?.isIntersecting) {
        loadMore();
      }
    },
    { threshold },
  );

  return {
    visibleItems,
    setLastItemRef,
    loadMore,
  };
}
