import {render, screen} from '@testing-library/react';
import Pagination from '../components/pagination/pagination';


describe ('tests for pagination component', ()=>{
    test('pagination its shown', () =>{
        render(<Pagination />);
        const paginationElement = screen.getByTestId('table-pagination');
        expect (paginationElement).toBeDefined();
    })
    
    test ('pagination number is shown correctly', () =>{
        render(<Pagination currentPageNo = {3}/>);
    const pageNumber = screen.getByText('3');
    expect(pageNumber).toBeDefined();
    })
    test ('pagination test next page functionality', ()=>{
        const currentPageNo = 3;
        const nextPageFn = jest.fn();
        render (<Pagination CurrentPageNo = {currentPageNo} handleNext= {nextPageFn}/>)
        const nextPageButton = screen.getByTestId('next-page-button');
        nextPageButton.click();
        expect (nextPageFn).toBeCalled();
    })

    test ('pagination test previouse page functionality', ()=>{
        const previousPageFn = jest.fn();
        render (<Pagination handlePrev={previousPageFn} />)
        const previousPageButton = screen.getByTestId('previouse-page-button');
        previousPageButton.click();
        expect (previousPageFn).toBeCalled();
    })
})
