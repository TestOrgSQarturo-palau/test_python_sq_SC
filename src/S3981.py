def main():
    my_list = [1, 2, 3, 4, 5]

    # Incorrect comparison: len(my_list) should be used instead of len(my_list) - 1
    for i in range(len(my_list)):
        print(my_list[i])

    # Incorrect comparison: Index 5 does not exist; it should be len(my_list) - 1
    print(my_list[len(my_list)])
    
if __name__ == "__main__":
    main()
